FROM python:3.8-slim

WORKDIR /app

# Install gcc and other dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    libc-dev

# Copy the requirements file and install Python dependencies
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

# Copy the rest of your application's code
COPY . .

EXPOSE 5000
CMD ["flask", "run", "--host=0.0.0.0"]
