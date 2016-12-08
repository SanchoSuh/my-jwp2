# Payment Project

## UI Developer

### 설치
1. `node 설치` https://nodejs.org/en/ (버전4 설치 권장)
2. cmd 창에서 payment-web-interfaces 폴더로 이동
3. `sudo npm install -g npm@3`
4. `sudo npm install -g gulp-cli karma-cli flow-bin`
5. `npm install`

### npm install 버그 시 참고 (mac에서만 설정)

맥에서 권한 문제가 발생할 수 있다. 맥을 여러 경로로(brew, 설치파일 등) 중복해서 설치할 경우 주로 발생한다.

1. cmd 창에서 payment-web-interfaces 폴더로 이동
2. `npm config get prefix` 명령어로 node npm의 global 모듈을 저장하는 폴더 위치를 검색
3. `sudo chown ${cmd whoami} ${node npm의 global 모듈을 저장하는 폴더 위치}`
4. `sudo chown ${cmd whoami} ./node_modules/` 

### build 하기
1. intellij 에서 gulpfile.js 마우스 우클릭 후 gulp task 실행
3. gulp task: `local_build_mobile` (watch 기능 포함)
4. gulp task: `local_build_pc` (watch 기능 포함)
