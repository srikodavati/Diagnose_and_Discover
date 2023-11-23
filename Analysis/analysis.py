import pandas as pd
import statsmodels.api as sm
from statsmodels.formula.api import ols
from scipy import stats



data = {
    'user_id': ['user1', 'user1', 'user2', 'user2', 'user3', 'user3', ...],
    'question': ['1', '5', '2', '6', '3', '7', ...],
    'rating': [4, 5, 3, 4, 2, 3, ...],
    'time': ['before', 'after', 'before', 'after', 'before', 'after', ...]
}

df = pd.DataFrame(data)

# Conduct the repeated measures ANOVA
model = ols('rating ~ C(question) + C(time) + C(question):C(time)', data=df).fit()
anova_results = sm.stats.anova_lm(model, typ=2)

print(anova_results)

# Perform paired t-tests for each question
results = {}

for q in range(1, 5):  # Assuming 4 question pairs
    before_col = f'question{q}_before'
    after_col = f'question{q}_after'
    
    t_statistic, p_value = stats.ttest_rel(df[before_col], df[after_col])
    results[f'Question {q}'] = p_value

print(results)

