import { ZodError } from 'zod';

interface ZodErrorMessageElement {
  code: string;
  path: Array<string | number>;
  message: string;
}

export const renderErrorToHtml = (
  error: unknown,
  context: string = ''
): void => {
  console.error(error);

  if (error instanceof ZodError) {
    const issues = JSON.parse(error.message) as ZodErrorMessageElement[];
    const prettyPrint = issues.map(
      ({ code, path, message }) =>
        `${code}@[${path.join('.')}] — ${message}`
    );

    document.body.innerHTML = `
      <style>
        /* Neutral, minimal styling */
        body {
          font-family: sans-serif;
          margin: 20px;
          color: #333;
        }
        h1 {
          font-size: 1.5em;
          margin-bottom: 0.5em;
        }
        pre {
          background-color: #eee;
          padding: 10px;
          border: 1px solid #ccc;
          overflow: auto;
          font-size: 0.75em;
        }
        details {
          margin-top: 1em;
        }
      </style>
      <h1>Configuration Error</h1>
      <p>An error occurred while parsing the configuration:</p>
      <pre>${prettyPrint.join('\n')}</pre>
      <details>
        <summary>Full error</summary>
        <pre>${error}</pre>
      </details>
    `;
  } else {
    document.body.innerHTML = `
      <h1>Unexpected Error${context ? `: ${context}` : ''}</h1>
      <pre>${
        error instanceof Error ? error.message : String(error)
      }</pre>
    `;
  }
};
