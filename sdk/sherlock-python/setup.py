import os

from setuptools import find_packages, setup

extras = {
    "postgres": ["psycopg2-binary"],
    "mysql": ["mysql-connector-python", "pymysql"],
    "redshift": ["psycopg2-binary"],
}

__version__ = "0.0.0+develop"


def package_files(directory):
    paths = []
    for path, directories, filenames in os.walk(directory):
        for filename in filenames:
            paths.append(os.path.join("..", path, filename))
    return paths


setup(
    name="datasherlock",
    version=__version__,
    description="datasherlock",
    packages=find_packages(),
    long_description=open("README.md").read().strip(),
    author="datasherlock",
    author_email="founder@datasherlock.io",
    url="http://datasherlock.io",
    py_modules=["datasherlock"],
    install_requires=[
        "grpcio-tools==1.50.0",
        "protobuf==4.21.9",
        "pandas",
        "snowflake-connector-python",
        "tabulate",
    ],
    zip_safe=False,
    extras_require=extras,
    keywords="datasherlock",
)
