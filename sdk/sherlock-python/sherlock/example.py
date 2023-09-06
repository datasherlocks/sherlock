from sherlock import Sherlock

sherlock = Sherlock(token="", db_type="mysql", db_config={
    'host': "localhost",
    'database': "employees",
    'user': "root",
    'port': 3306,
    'password': "college",
    'ssl_disabled': True
})

sherlock.register("employees")