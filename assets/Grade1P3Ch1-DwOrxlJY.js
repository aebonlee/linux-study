import{u as a,j as e,L as s}from"./index-DdsV6kLP.js";import{u as t}from"./useAOS-C5pKD0M4.js";import{S as r}from"./SEOHead-D1oFl9CA.js";import{L as c}from"./LessonComplete-B9ss6Dbq.js";const p=()=>{t();const{t:l}=a();return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"1급 실기 - 서버 구축 실무 - Linux Study",description:"LAMP/LEMP 스택, SSL/TLS, 웹서버+DB 서버 구축 시나리오를 학습합니다."}),e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{className:"page-title","data-aos":"fade-up",children:"실기 - 서버 구축 실무"}),e.jsx("p",{className:"page-subtitle","data-aos":"fade-up","data-aos-delay":"100",children:"LAMP/LEMP 스택, SSL/TLS 인증서, 웹서버+DB 서버 구축 시나리오 (고난도)"})]})}),e.jsxs("div",{className:"lesson-body container",children:[e.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[e.jsx("h2",{children:"1. LAMP 스택 구축"}),e.jsxs("p",{children:["LAMP는 ",e.jsx("strong",{children:"Linux + Apache + MySQL/MariaDB + PHP"}),"의 약자로, 가장 전통적인 웹 서비스 스택입니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"LAMP 스택 설치 (CentOS/Rocky Linux)"}),e.jsx("pre",{children:`# 1. Apache 설치 및 시작
$ yum install httpd
$ systemctl enable --now httpd
$ firewall-cmd --permanent --add-service=http
$ firewall-cmd --permanent --add-service=https
$ firewall-cmd --reload

# 2. MariaDB 설치 및 설정
$ yum install mariadb-server
$ systemctl enable --now mariadb

# 초기 보안 설정
$ mysql_secure_installation
# - root 비밀번호 설정
# - 익명 사용자 삭제
# - 원격 root 로그인 비활성화
# - test 데이터베이스 삭제

# 데이터베이스 및 사용자 생성
$ mysql -u root -p
MariaDB> CREATE DATABASE webapp CHARACTER SET utf8mb4;
MariaDB> CREATE USER 'webuser'@'localhost' IDENTIFIED BY 'SecureP@ss123';
MariaDB> GRANT ALL PRIVILEGES ON webapp.* TO 'webuser'@'localhost';
MariaDB> FLUSH PRIVILEGES;
MariaDB> EXIT;

# 3. PHP 설치
$ yum install php php-mysqlnd php-fpm php-json php-gd php-mbstring
$ systemctl restart httpd

# 4. 테스트 페이지 생성
$ cat > /var/www/html/info.php << 'EOF'
<?php phpinfo(); ?>
EOF

# 5. 동작 확인
$ curl http://localhost/info.php | head -20

# 테스트 후 info.php 삭제 (보안)
$ rm /var/www/html/info.php`})]})]}),e.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[e.jsx("h2",{children:"2. LEMP 스택 구축"}),e.jsxs("p",{children:["LEMP는 ",e.jsx("strong",{children:"Linux + (E)Nginx + MySQL/MariaDB + PHP"}),"의 약자로, 고성능 웹 서비스에 널리 사용됩니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"LEMP 스택 설치 (Ubuntu)"}),e.jsx("pre",{children:`# 1. Nginx 설치
$ apt update
$ apt install nginx
$ systemctl enable --now nginx

# 2. MariaDB 설치
$ apt install mariadb-server
$ mysql_secure_installation

# 3. PHP-FPM 설치
$ apt install php-fpm php-mysql php-gd php-mbstring

# 4. Nginx + PHP-FPM 연동 설정
# /etc/nginx/sites-available/default
server {
    listen 80;
    server_name example.com;
    root /var/www/html;
    index index.php index.html;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \\.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
    }

    location ~ /\\.ht {
        deny all;
    }
}

$ nginx -t
$ systemctl reload nginx`})]})]}),e.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[e.jsx("h2",{children:"3. SSL/TLS 인증서 설정"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"자체 서명 인증서 생성 및 Apache 설정"}),e.jsx("pre",{children:`# 자체 서명 인증서 생성 (테스트/개발 환경)
$ openssl req -x509 -nodes -days 365 -newkey rsa:2048 \\
  -keyout /etc/pki/tls/private/server.key \\
  -out /etc/pki/tls/certs/server.crt \\
  -subj "/C=KR/ST=Seoul/L=Seoul/O=MyOrg/CN=www.example.com"

# Apache SSL 모듈 설치
$ yum install mod_ssl

# /etc/httpd/conf.d/ssl.conf (주요 설정)
<VirtualHost *:443>
    ServerName www.example.com
    DocumentRoot /var/www/html

    SSLEngine on
    SSLCertificateFile /etc/pki/tls/certs/server.crt
    SSLCertificateKeyFile /etc/pki/tls/private/server.key

    # 보안 강화 설정
    SSLProtocol all -SSLv2 -SSLv3 -TLSv1 -TLSv1.1
    SSLCipherSuite HIGH:!aNULL:!MD5:!3DES
    SSLHonorCipherOrder on

    Header always set Strict-Transport-Security "max-age=31536000"
</VirtualHost>

# HTTP -> HTTPS 리다이렉트
<VirtualHost *:80>
    ServerName www.example.com
    Redirect permanent / https://www.example.com/
</VirtualHost>

$ systemctl restart httpd`})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"Let's Encrypt 무료 인증서 (실무)"}),e.jsx("pre",{children:`# Certbot 설치
$ yum install certbot python3-certbot-apache  # CentOS
$ apt install certbot python3-certbot-nginx    # Ubuntu

# Apache 인증서 발급
$ certbot --apache -d www.example.com -d example.com

# Nginx 인증서 발급
$ certbot --nginx -d www.example.com -d example.com

# 인증서 자동 갱신 설정
$ certbot renew --dry-run       # 테스트
$ crontab -e
0 3 * * * certbot renew --quiet

# 인증서 확인
$ certbot certificates
$ openssl x509 -in /etc/letsencrypt/live/example.com/cert.pem \\
  -noout -text -dates`})]})]}),e.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[e.jsx("h2",{children:"4. 고난도 실무 시나리오"}),e.jsxs("div",{className:"callout-box warning",children:[e.jsx("strong",{children:"시나리오 1: 웹 애플리케이션 서버 구축"}),e.jsx("br",{}),"조건: CentOS 기반으로 다음 구성을 완성하세요.",e.jsx("br",{}),"- Nginx를 리버스 프록시로 사용 (80, 443 포트)",e.jsx("br",{}),"- 백엔드 Apache 서버 (8080 포트)",e.jsx("br",{}),"- MariaDB 데이터베이스",e.jsx("br",{}),"- SSL 인증서 적용",e.jsx("br",{}),"- 방화벽 설정"]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"시나리오 1 풀이"}),e.jsx("pre",{children:`# 1. Apache를 8080 포트로 설정
$ vi /etc/httpd/conf/httpd.conf
Listen 8080
$ systemctl restart httpd

# 2. Nginx 리버스 프록시 설정
# /etc/nginx/conf.d/reverse-proxy.conf
upstream backend {
    server 127.0.0.1:8080;
}

server {
    listen 80;
    server_name www.example.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name www.example.com;

    ssl_certificate /etc/pki/tls/certs/server.crt;
    ssl_certificate_key /etc/pki/tls/private/server.key;

    location / {
        proxy_pass http://backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# 3. 방화벽 설정
$ firewall-cmd --permanent --add-service=http
$ firewall-cmd --permanent --add-service=https
$ firewall-cmd --reload

# 4. SELinux 설정
$ setsebool -P httpd_can_network_connect on`})]}),e.jsxs("div",{className:"callout-box warning",children:[e.jsx("strong",{children:"시나리오 2: 데이터베이스 백업 자동화"}),e.jsx("br",{}),"조건: MariaDB의 webapp 데이터베이스를 매일 새벽 2시에 자동 백업하고, 7일 이상된 백업 파일을 자동 삭제하는 스크립트를 작성하세요."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"시나리오 2 풀이"}),e.jsx("pre",{children:`#!/bin/bash
# /usr/local/bin/db-backup.sh

BACKUP_DIR="/backup/mysql"
DB_NAME="webapp"
DB_USER="backup_user"
DB_PASS="BackupP@ss123"
DATE=$(date +%Y%m%d_%H%M%S)
RETENTION_DAYS=7

# 백업 디렉터리 생성
mkdir -p $BACKUP_DIR

# mysqldump 백업
mysqldump -u $DB_USER -p$DB_PASS $DB_NAME | \\
  gzip > $BACKUP_DIR/\${DB_NAME}_\${DATE}.sql.gz

# 백업 성공 확인
if [ $? -eq 0 ]; then
    echo "$(date): Backup successful - \${DB_NAME}_\${DATE}.sql.gz" \\
      >> /var/log/db-backup.log
else
    echo "$(date): Backup FAILED" >> /var/log/db-backup.log
    exit 1
fi

# 오래된 백업 삭제
find $BACKUP_DIR -name "*.sql.gz" -mtime +$RETENTION_DAYS -delete

# 실행 권한 부여
$ chmod 700 /usr/local/bin/db-backup.sh

# cron 등록
$ crontab -e
0 2 * * * /usr/local/bin/db-backup.sh`})]})]}),e.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[e.jsx("h2",{children:"다음 학습"}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(s,{to:"/grade1/part3-ch2",className:"btn btn-primary",children:"실기 - 네트워크 보안 실무 →"}),e.jsx(s,{to:"/grade1/part2-ch2",className:"btn btn-secondary",children:"← 2차 - 보안 및 시스템 최적화"})]})]}),e.jsx(c,{lessonId:"grade1-p3ch1"})]})]})};export{p as default};
