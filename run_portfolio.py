import webbrowser
from threading import Timer
from app import app

def open_browser():
    webbrowser.open_new("http://127.0.0.1:5000/")

Timer(1, open_browser).start()
app.run(debug=True)
