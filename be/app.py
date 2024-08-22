from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route('/api/pokemons')
def get_pokemons():
    response = requests.get('https://pokeapi.co/api/v2/pokemon?limit=10')
    data = response.json()

    pokemons = []
    for item in data['results']:
        pokemon_data = requests.get(item['url']).json()
        pokemons.append({
            'id': pokemon_data['id'],
            'name': pokemon_data['name'],
            'image': pokemon_data['sprites']['front_default']
        })

    return jsonify(pokemons)

if __name__ == '__main__':
    app.run(debug=True)

