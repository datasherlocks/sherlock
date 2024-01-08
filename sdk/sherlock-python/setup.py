import setuptools

__version__ = "0.0.0+develop"

setuptools.setup(name='datasherlock',
                 version=__version__,
                 description='datasherlock',
                 long_description=open('README.md').read().strip(),
                 author='datasherlock',
                 author_email='founder@datasherlock.io',
                 url='http://datasherlock.io',
                 py_modules=['datasherlock'],
                 install_requires=[
                    "grpcio==1.50.0",
                    "grpcio-tools==1.50.0",
                    "protobuf==4.21.9",
                    "pandas",
                    "pymysql",
                    "psycopg2-binary",
                    "mysql-connector-python",
                    "google-cloud-bigquery"  
                 ],
                 zip_safe=False,
                 keywords='datasherlock',
                 
  )
