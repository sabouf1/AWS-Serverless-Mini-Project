from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('cost_report.html')

@app.route('/logged-out')
def logged_out():
    return render_template('logged-out.html')

if __name__ == '__main__':
    app.run(debug=True)
