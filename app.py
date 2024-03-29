from flask import Flask, request, render_template
import yaml

# configuration load
try:
    with open('config.yaml', 'r') as file:
        config = yaml.safe_load(file)
except Exception as e:
    print('Could not load config file. Using Default values')
    config = {
        'FLASK_HOST': '127.0.0.1',
        'FLASK_PORT': '5000',
        'FLASK_DEBUG': True,
        'FLASK_SECRET': 's3cr3t!'
    }

# app configuring
app = Flask(__name__)
app.config['SECRET_KEY'] = config['FLASK_SECRET']

@app.route("/")
def route_home():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(host=config['FLASK_HOST'], port=config['FLASK_PORT'], debug=config['FLASK_DEBUG'])