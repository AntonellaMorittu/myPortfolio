describe 'Index Page', type: :feature do
  it 'displays project list' do
    visit '/'
    expect(page).to have_css '.projects'
    within '.projects' do
      expect(page).to have_content 'My First Website'
      expect(page).to have_content 'FizzBuzz'
    end
  end

  it 'renders footer partial' do
    visit '/'
    expect(page).to have_selector 'footer'
    within 'footer' do
      expect(page).to have_content 'Copyright © 2020 Antonella Morittu'
    end
  end

end
