FROM sconecuratedimages/apps:node-10-alpine-scone4.2.1

COPY app.js /app/
COPY package.json /app/ 
RUN  cd app && npm install express --save

# unset SCONE_NO_FS_SHIELD
ENTRYPOINT ["node"]
CMD ["/app/app.js"]
