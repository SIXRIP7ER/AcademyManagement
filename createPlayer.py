import sys
import psycopg2


def getPlayers(db):
    players = None
    cur = db.cursor()
    query = "SELECT * FROM Player"
    cur.execute(query)
    players = cur.fetchall()
    cur.close()
    return players


def createPlayer(db, p):
    cur = db.cursor()
    query = """
            INSERT INTO Player VALUES
            (%s,%s,%s)
            """
    cur.execute(query, [p[0], p[1], p[2]])
    cur.close()
    db.commit()
    return None


db = None
try:
    # connect to database
    db = psycopg2.connect(
        dbname="academy", user="postgres", host='192.168.0.137', port='2022', password='postgres')

    # Create a player
    pInfo = ["masi", "hashimi", "2002-02-16"]
    createPlayer(db, pInfo)

    # Create a player
    pInfo = ["wali", "bakhtiari", "2002-02-16"]
    createPlayer(db, pInfo)

    # Retrieve Players
    players = getPlayers(db)
    for p in players:
        print(p)


except Exception as err:
    print(err)
finally:
    if db:
        db.close()
