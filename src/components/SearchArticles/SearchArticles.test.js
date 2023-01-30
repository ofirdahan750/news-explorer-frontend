import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchArticles from './SearchArticles';

describe('SearchArticles component', () => {
  test('renders without crashing', () => {
    const { container } = render(<SearchArticles />);
    expect(container).toBeTruthy();
  });

  test('displays "Loading..." while articles are loading', () => {
    const { getByText } = render(<SearchArticles />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  test('displays articles when they are loaded', () => {
    const { getByText } = render(<SearchArticles />);
    const articles = [
      { title: 'Article 1' },
      { title: 'Article 2' },
      { title: 'Article 3' },
    ];
    dispatch(setArticles({ articles, key: 'searchArticlesList' }));
    articles.forEach((article) => {
      expect(getByText(article.title)).toBeInTheDocument();
    });
  });
});
