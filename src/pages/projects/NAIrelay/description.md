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
현재 섹션에서는 Termux 및 Ubuntu 설치부터, 파일 공유 구조를 셋업하는 과정을 설명합니다.
이미 해당 구조를 가지고 있을 경우 생략하고 다음 섹션으로 넘어가주세요.

1. Termux 최신 버전을 설치합니다.
2. Ubuntu 환경을 설치합니다.

- Termux 실행 후, `pkg update` 및 `pkg upgrade`를 입력하여 환경을 최신화합니다.
- `pkg install proot-distro` 입력하여 proot-distro 설치합니다.
- `proot-distro install ubuntu` 입력하여 ubuntu 설치합니다.

3. Termux storage 연결

- `termux-setup-storage` 입력하여 안드로이드 저장소 내에 termux용 디렉토리 연결합니다. (이 때 저장소 사용 권한 요청이 있을 수 있습니다.)
- 디렉토리 확인(`dir ~`) 하였을 때 storage가 보인다면 성공입니다.

4. 공유용 디렉토리 셋업

- 다운로드 폴더 등을 이용해도 되지만, 편의상 새 폴더를 생성하도록 하겠습니다.
- `mkdir -p ~/storage/shared/폴더명` 입력하여 안드로이드 저장소 내에 폴더를 하나 만들겠습니다. 이 섹션에서는 편의상 `termuxshared` 로 이름짓겠습니다.

5. Ubuntu 내에 디렉토리 연결

- 사용 편의를 위해 방금 전 생성한 폴더를 Ubuntu 내에 링크하도록 하겠습니다.
- `proot-distro login ubuntu` 입력하여 ubuntu 환경에 로그인하겠습니다.
- `ln -s /storage/emulated/0/termuxshared ~/termuxshared` 입력하여 방금 전 생성한 폴더를 ubuntu 루트 디렉토리에 연결합니다.
  - `/storage/emulated/0` 은 일반적인 안드로이드 환경에서의 저장소 디렉토리입니다. 해당 디렉토리가 아닐 경우 확인해주세요.
- 디렉토리 확인(`dir ~`) 하였을 때 생성했던 `termuxshared` 또는 작성한 폴더 이름이 보인다면 성공입니다.

### 셋업

1. 다운로드받은 NAIrelay를 공유 폴더로 이동시킨 뒤 압축을 해제해주세요. 안드로이드 저장소 앱이나 기타 저장소 앱에서 작업할 수 있습니다.
2. Ubuntu 로그인 후 공유 폴더로 이동해주세요. `cd ~/termuxshared` 내부로 이동한 후, 저장소 확인(`dir`) 및 이동(`cd 폴더명`) 명령을 통해 NAIrelay 내부 파일을 탐색할 수 있습니다.
3. NAIrelay 파일이 보이는 디렉토리에 들어왔다면, `./setup.sh` 쉘 파일을 실행하여 의존성 패키지를 포함하는 가상환경을 설치합니다.

### 실행

`./nairelay.sh` 쉘 파일을 실행하여 NAIrelay를 실행합니다.
만약 권한 문제로 실행이 되지 않는다면, `chmod +x nairelay.sh`를 먼저 입력하여 권한을 부여해주세요.

## UI 탐색

브라우저에서 http://127.0.0.1:8000 입력하여 NAIrelay 페이지로 진입하겠습니다. Windows 환경에서는 트레이 아이콘을 우클릭하여 실행할 수 있습니다. 해당 주소는 초기값으로, 주소를 변경할 경우 알맞은 주소로 열어야 합니다.

## API 셋업

- Config 페이지에 진입하여, API 키(novelai token) 및 간단한 2차 비밀번호(relay access key)를 저장해주세요.
- 이후 URL 페이지에서 url 호출 양식을 확인할 수 있습니다.
