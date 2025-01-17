import sqlalchemy
from databases import Database

from bracket.config import config

database = Database(config.pg_dsn)

engine = sqlalchemy.create_engine(config.pg_dsn)
