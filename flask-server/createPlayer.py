import sys
import psycopg2


def get_players():
    '''This function retrieves players from database'''
    db = None
    try:
        # connect to database
        db = psycopg2.connect(
            dbname="academy", user="postgres", host='192.168.0.137', port='5432', password='postgres')
        players = None
        cur = db.cursor()
        query = "SELECT * FROM Player"
        cur.execute(query)
        players = cur.fetchall()
        cur.close()
        return players
    except Exception as err:
        print(err)
    finally:
        if db:
            db.close()


def create_player(p):
    '''This function adds a player to the database'''
    db = None
    try:
        # connect to database
        db = psycopg2.connect(
            dbname="academy", user="postgres", host='192.168.0.137', port='5432', password='postgres')
        cur = db.cursor()
        query = """
                INSERT INTO Player VALUES
                (%s,%s,%s)
                """
        cur.execute(query, [p[0], p[1], p[2]])
        cur.close()
        db.commit()
        return "created player"
    except Exception as err:
        print(err)
    finally:
        if db:
            db.close()
