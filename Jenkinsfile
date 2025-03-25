pipeline {
    agent any
    environment {
        ALLURE_RESULTS_DIR = "allure-results"
        ALLURE_REPORT_DIR = "allure-report"
    }

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

        stage('Generate Allure Report') {
            steps {
                sh 'npx allure generate $ALLURE_RESULTS_DIR -o $ALLURE_REPORT_DIR --clean'
            }
        }

        stage('Publish Allure Report') {
            steps {
                allure([
                    results: [[path: "allure-results"]],
                    report: [[path: "allure-report"]]
                ])
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
