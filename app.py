from flask import Flask, request
from createPlayer import get_players, create_player

app = Flask(__name__)


@app.route('/')
def hello_world():
    return "This is the main website"


@app.route("/playerslist", methods=['GET'])
def handle_players_list():
    playersList = get_players()
    # for p in playersList:
    #     print(p)
    return playersList


@app.route("/createplayer", methods=['POST'])
def handle_create_player():
    request_data = request.get_json()

    player_info = [
        request_data['first_name'],
        request_data['last_name'],
        request_data['dob']
    ]

    create_player(player_info)

    return "created player"


# if __name__ == "__main__":
app.run(host='0.0.0.0', port=80, debug=True)
