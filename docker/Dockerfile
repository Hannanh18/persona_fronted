From node
RUN mkdir persona_frontend \
    cp -rf ../src ./persona_frontend \
    cp -rf ../tests ./persona_frontend \
    cp -rf ../tools ./persona_frontend \
    cp -rf ../node_modules ./persona_frontend \
    cp babel.config.js ./persona_frontend \
    cp jest.config.js ./persona_frontend \
    cp package.json ./persona_frontend \
    mkdir 

RUN mkdir /home/persona_frontend
COPY persona_frontend /home/persona_frontend
WORKDIR /home/persona_frontend