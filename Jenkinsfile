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
                sh "node --version"
                sh "npm chromedriver --version"
                sh "npm chrome --version"
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