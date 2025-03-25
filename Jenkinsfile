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

         stage('Copy Artifacts from Previous Build') {
            steps {
                script {
                    copyArtifacts(
                        projectName: env.JOB_NAME,
                        buildNumber: '${BUILD_NUMBER-1}',
                        filter: '**/cypress/screenshots/**/*, **/cypress/videos/**/*, **/cypress/results/**/*', 
                        target: 'copied-artifacts'
                    )
                }
            }
        }
    }
}
