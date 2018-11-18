pipeline {
    agent any
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