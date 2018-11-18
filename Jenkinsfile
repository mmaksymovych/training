pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage('npm version') {
            steps {
                sh 'npm --version'
            }
        }
        stage('node version') {
            steps {
                sh 'node -v'
            }
        }
    }
}