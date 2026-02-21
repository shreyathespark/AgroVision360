// cognito-service.js
import { cognitoConfig } from './auth-config.js';

/**
 * Service to handle AWS Cognito Authentication operations.
 * Assumes Standard User Pool setup with Phone Number as alias/username.
 */
export class CognitoService {
    constructor() {
        if (typeof AmazonCognitoIdentity === 'undefined') {
            throw new Error('AWS Cognito SDK not found. Please ensure index.html includes the amazon-cognito-identity-js script tag and that your internet connection is active.');
        }

        this.poolData = {
            UserPoolId: cognitoConfig.UserPoolId,
            ClientId: cognitoConfig.ClientId
        };
        this.userPool = new AmazonCognitoIdentity.CognitoUserPool(this.poolData);
    }

    /**
     * Sign up a new user with a phone number.
     * Note: Standard Cognito signUp requires a password.
     */
    signUp(phoneNumber, password) {
        const attributeList = [];
        const dataPhoneNumber = {
            Name: 'phone_number',
            Value: phoneNumber
        };
        attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute(dataPhoneNumber));

        return new Promise((resolve, reject) => {
            this.userPool.signUp(phoneNumber, password, attributeList, null, (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    }

    /**
     * Confirm sign up using the OTP sent to the phone.
     */
    confirmSignUp(phoneNumber, code) {
        const userData = {
            Username: phoneNumber,
            Pool: this.userPool
        };
        const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

        return new Promise((resolve, reject) => {
            cognitoUser.confirmRegistration(code, true, (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    }

    /**
     * Resend confirmation code (OTP).
     */
    resendConfirmationCode(phoneNumber) {
        const userData = {
            Username: phoneNumber,
            Pool: this.userPool
        };
        const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

        return new Promise((resolve, reject) => {
            cognitoUser.resendConfirmationCode((err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    }

    /**
     * Start Passwordless Sign In (Custom Auth Flow).
     * This triggers the 'Define' and 'Create' Auth Challenge Lambda triggers.
     */
    signInPasswordless(phoneNumber) {
        return new Promise((resolve, reject) => {
            const userData = {
                Username: phoneNumber,
                Pool: this.userPool
            };
            const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

            // initiateAuth is used for Custom Auth flows
            cognitoUser.setAuthenticationFlowType('CUSTOM_AUTH');

            cognitoUser.initiateAuth(new AmazonCognitoIdentity.AuthenticationDetails({
                Username: phoneNumber,
            }), {
                onSuccess: (result) => resolve(result),
                onFailure: (err) => reject(err),
                customChallenge: (challengeParameters) => {
                    // This is where we wait for the OTP
                    this.activeCognitoUser = cognitoUser;
                    resolve({ challenge: true, challengeParameters });
                }
            });
        });
    }

    /**
     * Submit the OTP for the Custom Auth Challenge.
     */
    answerCustomChallenge(otpCode) {
        if (!this.activeCognitoUser) return Promise.reject("No active login challenge");

        return new Promise((resolve, reject) => {
            this.activeCognitoUser.sendCustomChallengeAnswer(otpCode, {
                onSuccess: (result) => {
                    this.activeCognitoUser = null;
                    resolve(result);
                },
                onFailure: (err) => reject(err)
            });
        });
    }

    /**
     * Sign out current user.
     */
    signOut() {
        const cognitoUser = this.userPool.getCurrentUser();
        if (cognitoUser) {
            cognitoUser.signOut();
        }
    }

    /**
     * Get current authenticated user session.
     */
    getSession() {
        const cognitoUser = this.userPool.getCurrentUser();
        if (!cognitoUser) return Promise.reject('No user found');

        return new Promise((resolve, reject) => {
            cognitoUser.getSession((err, session) => {
                if (err) return reject(err);
                resolve(session);
            });
        });
    }
}
