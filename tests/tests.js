test('Attributes', function () {
	equal($('#div').attr('class'), 'foobar', 'Get class attribute');

	ok($('#link').removeAttr('title'), 'Remove attribute');
	equal($('#link').attr('title'), null, 'Get null title attribute');

	ok($('#span').attr('lang', 'en'), 'Set lang attribute');
	equal($('#span').attr('lang'), 'en', 'Get lang attribute');

	equal($('#text').is('input'), true, 'is (input)');

	equal($('#text').val(), 'Hello World!', 'Get val test 1');

	ok($('#text').val('Bye World!'), 'Set val test');
	equal($('#text').val(), 'Bye World!', 'Get val test 2');
});

test('Class', function () {
	ok($('#span').addClass('blue'), 'addClass');
	equal($('#span').hasClass('blue'), true, 'hasClass (true)');

	ok($('#span').removeClass('blue'), 'removeClass');
	equal($('#span').hasClass('blue'), false, 'hasClass (false)');

	ok($('#span').toggleClass('blue'), 'toggleClass');
	equal($('#span').hasClass('blue'), true, 'hasClass (toogle true)');

	ok($('#span').toggleClass('blue'), 'toggleClass');
	equal($('#span').hasClass('blue'), false, 'hasClass (toogle false)');
});

test('CSS', function () {
	equal($('#div').css('display'), 'block', 'Get display property');

	ok($('#span').css('position', 'relative'), 'Set position property');
	equal($('#span').css('position'), 'relative', 'Get position property');
});