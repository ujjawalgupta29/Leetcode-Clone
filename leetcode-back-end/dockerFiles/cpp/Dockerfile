# Use an official Ubuntu as the base image
FROM ubuntu:20.04

# Set environment variables to avoid prompts during package installation
ENV DEBIAN_FRONTEND=noninteractive

# Update the package list and install g++ and any necessary dependencies
RUN apt-get update && apt-get install -y \
    g++ \
    make \
    cmake \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory inside the container
WORKDIR /usr/src/app/code

CMD ["bash", "-c", "g++ -o program main.cpp && ./program"]