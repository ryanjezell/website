from flask import Flask, render_template, request

app = Flask(__name__, static_url_path='/static/')

# Function to mix two colors
def mix_colors(color1, color2):
    # Convert hexadecimal color codes to RGB format
    r1, g1, b1 = int(color1[1:3], 16), int(color1[3:5], 16), int(color1[5:7], 16)
    r2, g2, b2 = int(color2[1:3], 16), int(color2[3:5], 16), int(color2[5:7], 16)

    # Mix the colors by averaging their RGB values
    mixed_color = "#{:02X}{:02X}{:02X}".format((r1 + r2) // 2, (g1 + g2) // 2, (b1 + b2) // 2)

    return mixed_color

@app.route('/', methods=['GET', 'POST'])
def color_mixer():
    mixed_color = None

    if request.method == 'POST':
        color1 = request.form['color1']
        color2 = request.form['color2']
        mixed_color = mix_colors(color1, color2)

    return render_template('color_mixer.html', mixed_color=mixed_color)

if __name__ == "__main__":
    app.run(ssl_context='adhoc', port=5000, host='0.0.0.0')
