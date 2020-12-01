node('local') {
    stage('Checkout') {
        echo 'Checkout...'
        checkout scm
    }

    stage('Install') {
        echo 'inistall...'
        sh 'yarn'
    }

    stage('Unit Test') {
        echo 'test...'
        sh 'yarn test'
    }

    stage('Build Docker Image') {
        echo 'Build...'
        dir('docker') {
            sh 'docker build -t persona_frontend -f Dockerfile .'
        }
    }
}