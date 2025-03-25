pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                powershell '''
                npm install
                '''
            }
        }
        stage('Run Cypress Tests') {
            steps {
                powershell '''
                npx cypress run
                '''
            }
        }
    }
}
