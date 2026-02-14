
from fastapi import FastAPI

app = FastAPI()
users = {}

def get_badge(score):
    if score >= 3000:
        return "Maestro Bienestar 🏆"
    elif score >= 1500:
        return "Campeón Vital 🌳"
    elif score >= 500:
        return "Héroe Activo 🌿"
    else:
        return "Explorador Saludable 🌱"

@app.get("/")
def root():
    return {"status":"Gamification API Running"}

@app.post("/add_points")
def add_points(data: dict):
    user = data["user"]
    points = data["points"]

    if user not in users:
        users[user] = 0

    users[user] += points

    return {
        "total_points": users[user],
        "medalla": get_badge(users[user])
    }
