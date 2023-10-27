FROM python

# Set the working directory to /app
WORKDIR /app

# Copy the requirements file
COPY . .

# Install the dependencies
RUN pip install -r requirements.txt

# Make migrations
RUN python manage.py makemigrations

# Migrate the database
RUN python manage.py migrate

# Start the Django server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]