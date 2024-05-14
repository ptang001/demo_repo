pipeline {
    agent {
        label 'agent_node'
    }
    environment {
	DOCKERHUB_PAT: credentials('docker_hub_pat_token')
    }
    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/fredericEducentre/reactJS.git'
            }
        }
        stage('Build') {
            steps {
                sh '''
                    npm install
                    npm run build
                '''
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Delivery') {
            steps {
                sh '''
                    docker login  -u ptan72 -p ${DOCKERHUB_PAT}
                    docker build . -t calcul-chauffage:${BUILD_ID}
                    docker tag calcul-chauffage:v0.0.1 ptan72/calcul-chauffage:${BUILD_ID}
                    docker push ptan72/calcul-chauffage:${BUILD_ID}
                '''
            }
        }
    }
    post {  
        always {  
            echo 'This will always run'  
        }  
        success {  
            echo 'This will run only if successful'  
            mail bcc: '', body: "<b>Success Example</b><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL de build: ${env.BUILD_URL}", cc: '', charset: 'UTF-8', from: '', mimeType: 'text/html', replyTo: '', subject: "SUCCESS CI: Project name -> ${env.JOB_NAME}", to: "pchhay69@gmail.com";  
        }  
        failure {  
            mail bcc: '', body: "<b>Failure Example</b><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL de build: ${env.BUILD_URL}", cc: '', charset: 'UTF-8', from: '', mimeType: 'text/html', replyTo: '', subject: "ERROR CI: Project name -> ${env.JOB_NAME}", to: "pchhay69@gmail.com";  
        }  
        unstable {  
             echo 'This will run only if the run was marked as unstable'  
        }  
        changed {  
            echo 'This will run only if the state of the Pipeline has changed'  
            echo 'For example, if the Pipeline was previously failing but is now successful'  
        }  
    } 
}
