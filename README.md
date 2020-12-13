# API 명세서

## Auth
### Student
- `POST auth/student/login`
    - request -
    ```json
    {
        "email":"hanbin8269@gmail.com",
        "password":"0128gksqls"
    }
    ```
    - response -
    ```json
    // 채워넣어
    ```
- `POST auth/student/sign-up`
    - request -
    ```json
    {
        "email":"hanbin8269@gmail.com",
        "password":"0128gksqls"
    }
    ```
    - response -
    ```json
    // 채워넣어
    ```
### Techer
- `POST auth/teacher/login`
    - request -
    ```json
    {
        "email":"hanbin8269@gmail.com",
        "password":"0128gksqls"
    }
    ```
    - response -
    ```json
    // 채워넣어
    ```
- `POST auth/teacher/sign-up`
    - request -
    ```json
    {
        "email":"hanbin8269@gmail.com",
        "password":"0128gksqls"
    }
    ```
    - response -
    ```json
    // 채워넣어
    ```

## Room

### room
- `GET room/` - room list 조회
    - response
    ```json
    {
        "rooms":[
            {
                "name":"123",
                "is_available":1,
                "current_user":0,
                "maximum_user":30
            },
            {
                "name":"랩실",
                "is_available":1,
                "current_user":0,
                "maximum_user":25
            }
        ]
    }
    ```
- `POST room/` - room 생성
    - request
    ```json
    {
        "name" : "랩실1",
        "maximum_user" : 30
    }
    ```
    - response
    ```json
    // 나중에 채우자!
    ```

- `GET room/랩실` - room 이름으로 하나 조회
    - response
    ```json
    {
        "room":{
            "name":"랩실",
            "is_available":1,
            "current_user":0,
            "maximum_user":30
        }
    }
    ```

- `PUT room/reserve/랩실` - 랩실 이름으로 예약
    - request
    ```json
    {
        "email" : "hanbin8269@gmail.com"
    }
    ```
    - response
    ```json
    {
        // 다음에추가하자!
    }
    ```