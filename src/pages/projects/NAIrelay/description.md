## 설치 방법 (Windows)

### 셋업

1. NAIrelay 릴리스를 다운로드합니다.
2. setup.bat 배치 파일을 실행하여 의존성 패키지를 포함하는 가상환경을 설치합니다.

### 실행

nairelay.bat 배치 파일을 실행하여 NAIrelay를 실행합니다.
작업관리줄 트레이에 NAIrelay가 생성되면 성공입니다.

## 설치 방법 (Android)

### 터미널 도구(Termux) 설치

현재 NAIrelay는 APK 패키지가 아니므로, 리눅스 환경으로 설치합니다.
현재 섹션에서는 Termux를 통해 Ubuntu 환경을 구성하겠습니다. 구성 방법은 [다음 글을 참고해주세요.](/articles/Lifehacks/Termux/)
이미 해당 구조를 가지고 있을 경우 생략하고 바로 셋업으로 넘어가면 됩니다.

### 셋업

1. 다운로드받은 NAIrelay의 압축을 해제하고 접근 가능한 위치에 옮겨주세요. 이 섹션에는 편의상 위 링크에서 사용한 `~/termuxshared` 디렉토리 이름을 사용하겠습니다.
2. Ubuntu 로그인 후 공유 폴더로 이동해주세요. `cd ~/termuxshared` 내부로 이동한 후, 저장소 확인(`dir`) 및 이동(`cd 폴더명`) 명령을 통해 NAIrelay 내부 파일을 탐색할 수 있습니다.
3. NAIrelay 파일이 보이는 디렉토리에 들어왔다면, `./setup.sh` 쉘 파일을 실행하여 의존성 패키지를 포함하는 가상환경을 설치합니다.

### 실행

`./nairelay.sh` 쉘 파일을 실행하여 NAIrelay를 실행합니다.
만약 권한 문제로 실행이 되지 않는다면, `chmod +x nairelay.sh`를 먼저 입력하여 권한을 부여해주세요.

## UI 탐색

브라우저에서 `127.0.0.1:8000` 또는 `localhost:8000` 주소로 NAIrelay 페이지로 진입하겠습니다. Windows 환경에서는 트레이 아이콘을 우클릭하여 실행할 수 있습니다. 해당 주소는 초기값으로, 주소를 변경할 경우 알맞은 주소로 열어야 합니다.

## API 셋업

- Config 페이지에 진입하여, API 키(novelai token) 및 간단한 2차 비밀번호(relay access key)를 저장해주세요.
- 이후 URL 페이지에서 url 호출 양식을 확인할 수 있습니다.
