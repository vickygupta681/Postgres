# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

For Migration 
( 
    
  {
    Command ---------->> "npm run typeorm -- migration:generate ./src/migration/[name] --dataSource ./src/data-source.ts" 
    for generation of a new migration and then run command for running the migration file.
  }
                                                            
                                                            [ OR ]

  {
    Add "typeorm": "typeorm-ts-node-commonjs -d ./data-source.ts"
    
    Then to generate the migration 
    Command ---------->>  npm run typeorm migration:generate ./src/migration/[name]

    Then to run the migraion 
    Command ---------->>  npm run typeorm migration:run

    Then to revert the migraion
    Command ---------->>  npm run typeorm migration:revert
  }

) 
