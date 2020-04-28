pipeline {
    agent {
        docker { image "chromedp/headless-shell:latest"}
    }
    stages {
        stage('Build') {
            steps{
                sh "npm install"
            }           
        }
        stage('Tests') {
            steps {
                sh "npm run test:ci"
            }           
        }
    }
}