# app.py
from fastapi import FastAPI
from pydantic import BaseModel
import torch  # or your ML library

# Import your trained model
from my_model import MyModel  # replace with your Python file

app = FastAPI()

# Load your model
model = MyModel()
model.load_state_dict(torch.load("agrovision.py"))
model.eval()

class Query(BaseModel):
    text: str

@app.post("/predict")
def predict(query: Query):
    user_input = query.text
    # Replace this with your model inference logic
    prediction = model.predict(user_input)
    return {"response": prediction}