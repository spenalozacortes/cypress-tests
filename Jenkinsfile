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

         stage('Archive Cypress Artifacts') {
            steps {
                script {
                    archiveArtifacts artifacts: '**/cypress/screenshots/**/*, **/cypress/videos/**/*, **/cypress/results/**/*', allowEmptyArchive: true
                }
            }
        }
    }
}
