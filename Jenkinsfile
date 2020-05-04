pipeline {
    agent {
        docker { image "qaninja/node-wd"}
    }
    stages {
        stage('Build') {
            steps {
                sh "npm install"
            }           
        }
        stage('Tests') {
            steps {
                sh "echo 'node version ->' node --version"
                sh "echo 'chromedriver version ->' npm chromedriver --version"
                sh "echo 'chrome version ->' npm chrome --version"
                sh "npm run test:ci"
            }
            post {
                always {
                    junit testDataPublishers: [[$class: 'AttachmentPublisher']], testResults: "tests_output/**/*.xml"
                }
            }       
        }
    }
}