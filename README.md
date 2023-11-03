

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://gitlab.ttgtpmg.net/ast/microservices/maps/api/api-node-maspsm.git
git branch -M main
git push -uf origin main
```
## Installation

```bash
#Kubernetes Pod External config
Check the below to mount the path in Kubernetes Configuration "./utility/property.util.js"
eg. propertypath = [/appdata/ttg/ast/app/ncal/pmdb/conf/config.properties]

#Windows
set NODE_ENV = dev [eg. dev , prod,preprod,qa] 

#Linux
export NODE_ENV =dev [eg. dev , prod,preprod,qa] 
```
Use the package manager NPM to install dependencies in project folder.
```bash
npm install
```

```bash
npm start
```
Only for local development 
```bash
npm run local
```
## Contributing & Reference
-[Sequelizer](https://sequelize.org/)

-[Express](http://expressjs.com/)


