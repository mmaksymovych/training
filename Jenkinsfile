pipeline {
    agent any
    stages {
        stage('npm version') {
            steps {
                sh 'echo "Let's check npm version"'
                sh 'npm --version'
            }
        }
        stage('node version') {
            steps {
                sh 'echo "Let's check node version"'
                sh 'node -v'
            }
        }
    }
}