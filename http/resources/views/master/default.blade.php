<!DOCTYPE html>
<html lang="ko">
<head>
    @yield('css')
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Welcome</title>
</head>
<body>
    @yield('body')
    @yield('script')
</body>
</html>