	var TODAY = new Date(); // Текущая дата
  TODAY.setHours(0, 0, 0, 0); // Устанавливаем время на полночь

	function showWorkDates() {
		// Опции для сокращенного вывода даты. Без времени и часового пояса.
		var options = {
		  year: 'numeric',
		  month: 'short',
		  day: 'numeric',
		  weekday: 'short'
		};
		var workDate = new Date(2018, 3, 24); // Задаем прошедшую дату когда первая смена
		while(TODAY.getFullYear() + 1 >= workDate.getFullYear()) {
			var workYear = workDate.getFullYear(); // Год вычисляемой смены
			var workMonth = workDate.getMonth(); // Месяц вычисляемой смены
			var workDay = workDate.getDate(); // День вычисляемой смены
			var workNight = new Date(workYear, workMonth, workDay + 1); // Ночная смена
			var niceWorkDate = workDate.toLocaleString("ru", options); // краткий вид даты RU
			var niceWorkNight = workNight.toLocaleString("ru", options); // краткий вид даты RU
			var actualWorkDate = workDate.getTime() >= TODAY.getTime(); // исключаем прошедшие рабочие дни
			var actualWorkNight = workNight.getTime() >= TODAY.getTime(); // исключаем прошедшие рабочие ночи
			if (actualWorkDate || actualWorkNight) { // Выводим смены от текущего дня
				if (actualWorkDate) { // Если дневная смена не прошедшая, выводим
					var li = document.createElement('li');
					li.innerHTML = "<b class='color1'>День:</b> " + niceWorkDate;
					list.appendChild(li);
				}
				if (actualWorkNight) { // Если ночная смена не прошедшая, выводим
					var li2 = document.createElement('li');
					li2.className = "m-bottom";
					li2.innerHTML = "<b class='color2'>Ночь:</b> " + niceWorkNight;
					list.appendChild(li2);
				}
			}
			workDate.setDate(workDay + 4); // Фиксируем дату след. смены
		}
	}

	showWorkDates();

