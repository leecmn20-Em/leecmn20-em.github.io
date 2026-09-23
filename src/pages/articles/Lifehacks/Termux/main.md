## Termux 설치하기

2026.9월 기준, Playstore에 등록된 Termux가 업데이트되면서, Github 등을 거치지 않고도 플레이스토어에서 쉽게 설치할 수 있다.

## Ubuntu 설치하기

Termux 실행 후, 다음 명령을 순서대로 입력하여 Ubuntu 환경을 설치한다.

- `pkg update` 및 `pkg upgrade`
- `pkg install proot-distro`
- `proot-distro install ubuntu`

이제 `proot-distro login ubuntu` 명령으로 Ubuntu 환경에 접속할 수 있다.
접속 중에는 언제든 `logout` 명령으로 빠져나올 수 있다.

## Termux storage 연결하기

안드로이드 저장소는 기본 제공되는 애플리케이션 혹은 각종 탐색기 앱으로 관리할 수 있지만, Termux 저장소는 해당 방법으로 접근할 수 없다. 하지만 Termux storage 서비스를 통해 Termux 저장소와 안드로이드 저장소를 연결하면 안드로이드 저장소를 Termux 내에서도 접근할 수 있다.

- `termux-setup-storage`를 입력하여 안드로이드 저장소와 termux용 디렉토리를 연결한다. (이 때 저장소 사용 권한 요청이 있을 수 있다.)
- termux 내에서 `dir ~`명령으로 루트 디렉토리를 확인하였을 때 storage가 보인다면 성공이다.

## 공유용 디렉토리 만들기

Termux storage 기능으로 안드로이드 저장소를 연결하였으나, 아직은 termux 내에서 안드로이드 저장소에 접근할 수 있을 뿐이다. 이대로면 관리가 불편하니 termux에서 사용할 디렉토리를 만들겠다.

- `mkdir -p ~/storage/shared/폴더명`을 입력하여 안드로이드 저장소 내에 폴더를 생성한다. 편의상 이 글에서는 `termuxshared`를 사용하겠다.

## Ubuntu 내에 공유 디렉토리 연결하기

사용 편의를 위해 방금 전 생성한 폴더를 Ubuntu 내에 링크하도록 하겠다.

- 먼저 `proot-distro login ubuntu`명령을 입력하여 ubuntu 환경에 로그인한다.
- `ln -s /storage/emulated/0/termuxshared ~/termuxshared`를 입력하면 방금 전 생성한 폴더가 ubuntu 루트 디렉토리에 링크된다.
  - `/storage/emulated/0` 은 일반적인 안드로이드 환경에서의 저장소 디렉토리이다. 해당 디렉토리가 아닐 경우 확인해봐야 한다.
- ubuntu 내에서 `dir ~`명령으로 루트 디렉토리를 확인하였을 때 생성했던 `termuxshared` 또는 작성한 폴더 이름이 보인다면 성공이다.

이제 ubuntu 루트에서 공유 디렉토리에 쉽게 접근할 수 있다.
