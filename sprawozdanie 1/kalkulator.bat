@echo off
title Kalkulator
cls
:poczatek

echo Podaj liczby na ktorych beda wykonywane obliczenia.
set /p a=Liczba_1:
set /p b=Liczba_2:

echo. 

echo Wybor dzialania

echo Dodawanie - 1
echo Odejmowanie - 2
echo Mnozenie - 3
echo Dzielenie - 4

echo.

set /p dzialanie=
if %dzialanie%==1 goto suma
if %dzialanie%==2 goto roznica
if %dzialanie%==3 goto iloczyn
if %dzialanie%==4 goto iloraz

echo.

:suma
set /a wynik=%a%+%b%
goto wynik

:roznica
set /a wynik=%a%-%b%
goto wynik

:iloczyn
set /a wynik=%a%*%b%
goto wynik

:iloraz
if %b% == 0 echo Nie dziel przez zero
if %b% == 0 goto poczatek
set /a wynik=%a%/%b%
goto wynik

echo.

:wynik
echo Wynik : %wynik%

 echo.

echo Rozpocznij od nowa klikajac dowolny przycisk
pause>nul
cls
goto poczatek