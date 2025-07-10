// playwright/todo.spec.ts
// TodoアプリのE2Eテスト（日本語コメント付き）
import { test, expect } from '@playwright/test';

test.describe('Todoアプリ E2Eテスト', () => {
  test('Todoの追加・削除・全削除', async ({ page }) => {
    // サイトにアクセス
    await page.goto('http://localhost:5000/');
    await expect(page).toHaveTitle(/Todo App/);

    // Todoを追加
    const newTodo = 'テストタスク';
    await page.getByRole('textbox', { name: 'Add Todo' }).fill(newTodo);
    await page.getByRole('button', { name: 'Add' }).click();
    await expect(page.getByText(newTodo)).toBeVisible();

    // 既存のTodoを全て削除
    // "Delete"ボタンをname指定で全てクリック
    while (await page.getByRole('button', { name: 'Delete' }).count() > 0) {
      await page.getByRole('button', { name: 'Delete' }).first().click();
    }
    // Todoリストが空であることを確認
    await expect(page.locator('li')).toHaveCount(0);
  });
});
