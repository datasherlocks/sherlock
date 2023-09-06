import setuptools
from sherlock.version import Version


setuptools.setup(name='sherlock',
                 version=Version('0.0.1').number,
                 description='datasherlock',
                 long_description=open('README.md').read().strip(),
                 author='datasherlock',
                 author_email='founder@textquery.dev',
                 url='http://datasherlocks.io',
                 py_modules=['sherlock'],
                 install_requires=[],
                 zip_safe=False,
                 keywords='datasherlock',
                 classifiers=['datasherlock'])
