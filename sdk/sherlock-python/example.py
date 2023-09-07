from sherlockai import Sherlock

sherlock = Sherlock(token="", db_type="mysql", db_config={
    'host': "100.88.50.30",
    'database': "employees",
    'user': "root",
    'port': 3306,
    'password': "college",
    'ssl_disabled': True
})

print(sherlock.register("employees"))
print(sherlock.ask("List of department"))
print(sherlock.list())