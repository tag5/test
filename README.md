# Local computer deployment procedure:
First terminal: Running backend:
```
cd backend
nest start
```

Second terminal: Running frontend:
```
cd frontend
npm run dev
```

Browse to http://localhost:3000/

# Local computer deployment with docker-compose:
from folder containing docker-compose.yml:
```
export GRAPHQL_URL=http://localhost:8080/graphql
docker-compose up -d
```

Browse to http://localhost:3000/

# Lauching automated tests:
Testing backend:
```
cd backend
npm run test:e2e
```
