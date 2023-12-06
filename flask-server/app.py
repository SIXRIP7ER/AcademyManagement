import signal
import sys
from json import dumps
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from createPlayer import get_players, create_player


def quit_gracefully(*args):
    sys.exit()


def default_handler(err):
    response = err.get_response()
    print('response', err, err.get_response())
    response.data = dumps({
        "code": err.code,
        "name": "System Error",
        "message": err.get_description(),
    })
    response.content_type = 'application/json'
    return response


app = Flask(__name__)
CORS(app)


app.config['TRAP_HTTP_EXCEPTIONS'] = True
app.register_error_handler(Exception, default_handler)


@app.route('/')
def hello_world():
    return "This is the main website"


@app.route("/playerslist", methods=['GET'])
def handle_players_list():
    return jsonify({'players': get_players()})


@app.route("/createplayer", methods=['POST'])
def handle_create_player():
    request_data = request.get_json()
    player_info = [
        request_data['first_name'],
        request_data['last_name'],
        request_data['dob']
    ]
    return create_player(player_info)


if __name__ == "__main__":
    signal.signal(signal.SIGINT, quit_gracefully)
    app.run(host='0.0.0.0', port=80, debug=True)
